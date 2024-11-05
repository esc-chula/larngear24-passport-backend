package character;

import base.Idol;
import base.Rappable;
import logic.Tier;

public class Rapper extends Idol implements Rappable{

	private int rapPoint;
	private Tier tier;

	public Rapper(String name, int rapPoint) {
		super(name, 0);
		setRapPoint(rapPoint);
	}
	
	@Override
	public void rap() {
		String rapLine = null;
		if(tier == Tier.NoName) rapLine = "My words are weapons, slicing through the air ⚝";
		else if(tier == Tier.Global) rapLine = "From the streets to the stage, I’m the voice of the crowd ⚝";
			
		System.out.println(getName()+" : "+rapLine);
	}

	@Override
	public String getFullName() {
		return name+", the "+tier.toString()+" Rapper";
	}

	@Override
	public int getRapPoint() {
		return rapPoint;
	}

	@Override
	public void setRapPoint(int rapPoint) {
		this.rapPoint = rapPoint;
		tier = Tier.getRapperTier(this);
		updateAuraPoint();
	}

	@Override
	protected void updateAuraPoint() {
		auraPoint = rapPoint;
	}

	@Override
	public void showRapPoint() {
		System.out.println("Rap point = "+rapPoint);
	}

}
