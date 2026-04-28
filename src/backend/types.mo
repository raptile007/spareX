module {
  public type StockStatus = {
    #InStock;
    #Low;
    #OutOfStock;
  };

  public type BikePart = {
    id : Text;
    name : Text;
    brand : Text;
    category : Text;
    price : Nat;
    stock : StockStatus;
    distance : Text;
    imageUrl : Text;
    description : Text;
    sellerName : Text;
    sellerPhone : Text;
    sellerAddress : Text;
  };
};
