package base;

public abstract class Idol {
	
	protected String name;
	protected int auraPoint;
	public abstract String getFullName();
	public String getName() {
		return name;
	}
	public void greeting() {
		System.out.println(getName()+" : "+"Hi, I am "+getName()+".");
	}
	public int getAuraPoint() {
		return auraPoint;
	}
	protected abstract void updateAuraPoint();
	
	protected Idol(String name, int auraPoint) {
		this.name = name;
		this.auraPoint = auraPoint;
	}
	
}
