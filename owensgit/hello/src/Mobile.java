public  abstract  class Mobile {
    private  String name;
    private String brand;
    private String color;

    public Mobile(String name, String brand, String color) {
        this.name = name;
        this.brand = brand;
        this.color = color;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
    public abstract void call(String message);
}
