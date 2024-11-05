package character;

import base.Singable;
import logic.Tier;
import base.Idol;

public class Singer extends Idol implements Singable {

	private int singPoint;
	private Tier tier;
	
	
	public Singer(String name,int singPoint) {
		super(name, 0);
		setSingPoint(singPoint);
	}
	
	@Override
	public void sing() {
		String singLine = null;
		if(tier==Tier.Karaoke) singLine = "Every note a heartbeat, pulsing in the night ♪";
		else if(tier==Tier.LiveMusic) singLine = "I’m a symphony of dreams, soaring ever high ♪";
		else if(tier==Tier.Opera) singLine = "With a voice that echoes, I’m healing all the scars ♪";
		
		System.out.println(getName()+" : "+singLine);
	}

	@Override
	public String getFullName() {
		return name+", the "+tier.toString()+" Singer";
	}

	@Override
	public int getSingPoint() {
		return singPoint;
	}

	@Override
	public void setSingPoint(int singPoint) {
		this.singPoint = singPoint;
		tier = Tier.getSingerTier(this);
		updateAuraPoint();
	}

	@Override
	protected void updateAuraPoint() {
		auraPoint = singPoint;
	}

	@Override
	public void showSingPoint() {
		System.out.println("Sing point = "+singPoint);
	}

	

}
