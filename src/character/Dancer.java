package character;

import base.Danceable;
import base.Idol;

public class Dancer extends Idol implements Danceable {
	
	private int dancePoint;
	
	public Dancer(String name,int dancePoint) {
		super(name,0);
		setDancePoint(dancePoint);
	}

	@Override
	public void dance() {
		String danceLine = "Every move I make is a spark in the night ⼺";
		
		System.out.println(getName()+" : "+danceLine);
	}

	@Override
	public String getFullName() {
		return name+", the Dancer";
	}

	@Override
	public int getDancePoint() {
		return dancePoint;
	}

	@Override
	public void setDancePoint(int dancePoint) {
		this.dancePoint = dancePoint;
		updateAuraPoint();
	}
	
	@Override
	protected void updateAuraPoint() {
		auraPoint = dancePoint;
	}

	@Override
	public void showDancePoint() {
		System.out.println("Dance point = "+dancePoint);
	}

}
