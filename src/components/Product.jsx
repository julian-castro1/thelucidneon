

class Product{
        color = "red";
        track = null;
        size = "M";
        image = "";
        qty = 1;

        constructor(color, track, size = "M", image){
                this.color = color;
                this.track = track;
                this.size = size;
                this.image = image;
        }
}

export default Product;