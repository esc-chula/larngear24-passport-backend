package character;

import base.Danceable;
import base.Idol;
import base.Rappable;
import base.Singable;

public class SuperIdol extends Idol implements Singable, Danceable, Rappable {

	private int dancePoint;
	private int singPoint;
	private int rapPoint;
	
	public SuperIdol(String name, int dancePoint, int singPoint, int rapPoint) {
		super(name, 0);
		setDancePoint(dancePoint);
		setSingPoint(singPoint);
		setRapPoint(rapPoint);
	}

	public void greeting() {
		System.out.println(getName()+" : "+"It's a pleasure of you to meet me!");
	}
	
	@Override
	public void rap() {
		String rapLine = "Lyrics sharp as daggers, cutting through the lies ⚝";
		
		System.out.println(rapLine);
	}

	@Override
	public void dance() {
		String danceLine = "I flow like water, graceful and free ⼺";
		
		System.out.println(danceLine);
	}

	@Override
	public void sing() {
		String singLine = "Every song I write is a piece of my truth ♪";
		
		System.out.println(getName()+" : "+singLine);
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
	public int getSingPoint() {
		return singPoint;
	}

	@Override
	public void setSingPoint(int singPoint) {
		this.singPoint = singPoint;
		updateAuraPoint();
	}

	@Override
	public int getRapPoint() {
		return rapPoint;
	}

	@Override
	public void setRapPoint(int rapPoint) {
		this.rapPoint = rapPoint;
		updateAuraPoint();
	}

	@Override
	public String getFullName() {
		return name+" , the Super Idol";
	}

	@Override
	protected void updateAuraPoint() {
		auraPoint = dancePoint + singPoint + rapPoint;
	}
	
	@Override
	public void showSingPoint() {
		System.out.println("Sing point = "+singPoint);
	}

	@Override
	public void showRapPoint() {
		System.out.println("Rap point = "+rapPoint);
	}
	
	@Override
	public void showDancePoint() {
		System.out.println("Dance point = "+dancePoint);
	}

}
