import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X, Package, Layers, FolderOpen, Clock } from "lucide-react";
import { searchAll, SearchResult } from "@/lib/searchUtils";
import { Link } from "wouter";
import { getProductImageSrc } from "@/assets/images";
import { getProducts } from "@/data/constants";

const RECENT_SEARCHES_KEY = "recent_searches";
const MAX_RECENT_SEARCHES = 8;

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Helper functions for recent searches
const getRecentSearches = (): string[] => {
  try {
    const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveRecentSearch = (searchTerm: string) => {
  if (!searchTerm.trim() || searchTerm.trim().length < 2) return;

  try {
    const recent = getRecentSearches();
    const filtered = recent.filter(
      (term) => term.toLowerCase() !== searchTerm.toLowerCase(),
    );
    const updated = [searchTerm, ...filtered].slice(0, MAX_RECENT_SEARCHES);
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
  } catch {
    // Silently fail if localStorage is not available
  }
};

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const { t } = useTranslation(["common", "products"]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"relevance" | "name-az" | "name-za">(
    "relevance",
  );
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Load recent searches on mount and when dialog opens
  useEffect(() => {
    if (open) {
      setRecentSearches(getRecentSearches());
    }
  }, [open]);

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // Save search to recent when user performs a search
  useEffect(() => {
    if (debouncedQuery.trim().length >= 2) {
      saveRecentSearch(debouncedQuery.trim());
      setRecentSearches(getRecentSearches());
    }
  }, [debouncedQuery]);

  // Get search results
  const searchResults = useMemo(() => {
    if (debouncedQuery.trim().length < 2) {
      return [];
    }

    return searchAll(
      {
        query: debouncedQuery,
        category: category === "all" ? undefined : category,
        sortBy,
        limit: 50,
      },
      t,
    );
  }, [debouncedQuery, category, sortBy, t]);

  // Get categories for filter
  const categories = getProducts(t);

  // Reset on close
  useEffect(() => {
    if (!open) {
      setQuery("");
      setCategory("all");
      setSortBy("relevance");
    }
  }, [open]);

  const handleResultClick = () => {
    onOpenChange(false);
  };

  const handleRecentSearchClick = (searchTerm: string) => {
    setQuery(searchTerm);
  };

  const getResultIcon = (type: SearchResult["type"]) => {
    switch (type) {
      case "product":
        return <Package className="h-4 w-4" />;
      case "productGroup":
        return <Layers className="h-4 w-4" />;
      case "subcategory":
        return <FolderOpen className="h-4 w-4" />;
    }
  };

  const getResultTypeLabel = (type: SearchResult["type"]) => {
    switch (type) {
      case "product":
        return t("common:search.products");
      case "productGroup":
        return t("common:search.productGroups");
      case "subcategory":
        return t("common:search.subcategories");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0 flex flex-col">
        <DialogHeader className="px-6 pt-6 pb-4 border-b flex-shrink-0">
          <DialogTitle className="text-2xl">
            {t("common:search.searchProducts")}
          </DialogTitle>
        </DialogHeader>

        <div className="px-6 py-4 space-y-4 flex-shrink-0">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              data-testid="input-search"
              type="text"
              placeholder={t("common:search.placeholder")}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 pr-10 h-12 text-lg"
              autoFocus
            />
            {query && (
              <button
                data-testid="button-clear-search"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="flex gap-3 flex-wrap">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger
                data-testid="select-category-filter"
                className="w-[200px]"
              >
                <SelectValue
                  placeholder={t("common:search.filterByCategory")}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  {t("common:search.allCategories")}
                </SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={sortBy}
              onValueChange={(val) => setSortBy(val as any)}
            >
              <SelectTrigger data-testid="select-sort-by" className="w-[180px]">
                <SelectValue placeholder={t("common:search.sortBy")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">
                  {t("common:search.relevance")}
                </SelectItem>
                <SelectItem value="name-az">
                  {t("common:search.nameAZ")}
                </SelectItem>
                <SelectItem value="name-za">
                  {t("common:search.nameZA")}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Recent Searches (shown when no query and there are recent searches) */}
          {query.trim().length < 2 && recentSearches.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm font-medium text-muted-foreground">
                  {t("common:search.recentSearches")}:
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((recentSearch, index) => (
                  <button
                    key={`${recentSearch}-${index}`}
                    onClick={() => handleRecentSearchClick(recentSearch)}
                    data-testid={`recent-search-${recentSearch.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 
                      bg-muted/60 hover:bg-primary/10 
                      border border-border/50 hover:border-primary/40
                      text-foreground/70 hover:text-secondary
                      hover:shadow-sm hover:scale-[1.02] active:scale-95"
                  >
                    <span className="relative z-10">{recentSearch}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        {debouncedQuery.trim().length >= 2 && (
          <div className="px-6 pb-6 flex-1 flex flex-col min-h-0">
            <div className="mb-3 flex-shrink-0">
              <p
                className="text-sm text-muted-foreground"
                data-testid="text-results-count"
              >
                {searchResults.length > 0
                  ? t("common:search.showingResults", {
                      count: searchResults.length,
                    })
                  : t("common:search.noResultsFound")}
              </p>
            </div>

            <div className="flex-1 pr-4 overflow-y-auto min-h-0">
              {searchResults.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    {t("common:search.noResultsMessage")}
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {searchResults.map((result) => (
                    <Link
                      key={`${result.type}-${result.id}`}
                      href={result.url}
                      onClick={handleResultClick}
                    >
                      <div
                        data-testid={`search-result-${result.type}-${result.id}`}
                        className="flex gap-4 p-4 rounded-lg border bg-card hover:bg-accent hover:shadow-md transition-all cursor-pointer group"
                      >
                        {/* Image */}
                        {result.image && (
                          <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden bg-muted">
                            <img
                              src={getProductImageSrc(result.image) || ""}
                              alt={result.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                        )}

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-2 mb-1">
                            <Badge
                              variant="outline"
                              className="flex items-center gap-1 text-xs"
                            >
                              {getResultIcon(result.type)}
                              {getResultTypeLabel(result.type)}
                            </Badge>
                            {result.manufacturer && (
                              <Badge variant="secondary" className="text-xs">
                                {result.manufacturer}
                              </Badge>
                            )}
                          </div>
                          <h3 className="font-semibold text-base mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                            {result.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {result.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
