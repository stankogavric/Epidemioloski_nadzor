package epidemioloski_nadzor.models;

public class Location {
    private String type;
    private double[] coordinates;

    public Location(){}
    public Location(String type,double[] coordinates){
        this.type = type;
        this.coordinates = coordinates;
    }

    public void setType(String type){
        this.type = type;
    }

    public void setCoordinates(double[] coordinates){
        this.coordinates = coordinates;
    }

    public String getType(){
        return this.type;
    }
    
    public double[] getCoordinates(){
        return this.coordinates;
    }

}
