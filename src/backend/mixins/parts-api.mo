import Types "../types";
import PartsLib "../lib/Parts";
import List "mo:core/List";

mixin (parts : List.List<Types.BikePart>) {
  public query func getAllParts() : async [Types.BikePart] {
    PartsLib.getAll(parts);
  };

  public query func searchParts(q : Text) : async [Types.BikePart] {
    PartsLib.search(parts, q);
  };

  public query func filterByBrand(brand : Text) : async [Types.BikePart] {
    PartsLib.filterBrand(parts, brand);
  };

  public query func filterByCategory(category : Text) : async [Types.BikePart] {
    PartsLib.filterCategory(parts, category);
  };

  public query func getPartById(id : Text) : async ?Types.BikePart {
    PartsLib.getById(parts, id);
  };

  public query func getFilteredParts(q : Text, brand : Text, category : Text) : async [Types.BikePart] {
    PartsLib.getFiltered(parts, q, brand, category);
  };
};
