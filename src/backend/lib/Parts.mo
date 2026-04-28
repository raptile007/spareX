import Types "../types";
import List "mo:core/List";
import Text "mo:core/Text";

module {
  type BikePart = Types.BikePart;

  func textContains(haystack : Text, needle : Text) : Bool {
    if (needle == "") return true;
    haystack.toLower().contains(#text (needle.toLower()));
  };

  public func getAll(parts : List.List<BikePart>) : [BikePart] {
    parts.toArray();
  };

  public func search(parts : List.List<BikePart>, q : Text) : [BikePart] {
    if (q == "") return parts.toArray();
    parts.filter(func(p) {
      textContains(p.name, q) or textContains(p.brand, q) or textContains(p.category, q) or textContains(p.description, q)
    }).toArray();
  };

  public func filterBrand(parts : List.List<BikePart>, brand : Text) : [BikePart] {
    if (brand == "") return parts.toArray();
    parts.filter(func(p) { p.brand.toLower() == brand.toLower() }).toArray();
  };

  public func filterCategory(parts : List.List<BikePart>, category : Text) : [BikePart] {
    if (category == "") return parts.toArray();
    parts.filter(func(p) { p.category.toLower() == category.toLower() }).toArray();
  };

  public func getById(parts : List.List<BikePart>, id : Text) : ?BikePart {
    parts.find(func(p) { p.id == id });
  };

  public func getFiltered(parts : List.List<BikePart>, q : Text, brand : Text, category : Text) : [BikePart] {
    parts.filter(func(p) {
      let matchesQ = q == "" or textContains(p.name, q) or textContains(p.brand, q) or textContains(p.category, q) or textContains(p.description, q);
      let matchesBrand = brand == "" or p.brand.toLower() == brand.toLower();
      let matchesCategory = category == "" or p.category.toLower() == category.toLower();
      matchesQ and matchesBrand and matchesCategory
    }).toArray();
  };
};
