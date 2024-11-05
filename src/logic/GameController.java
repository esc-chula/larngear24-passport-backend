package logic;

import java.util.ArrayList;

import base.Danceable;
import base.Idol;
import base.Rappable;
import base.Singable;

public class GameController {
	public static GameController instance;
	public ArrayList<Idol> idols;
	public int auraPoint;
	public int errorPoint;
	
	public GameController() {
		idols = new ArrayList<>();
		errorPoint = 0;
	}

	public static GameController getInstance() {
		if(instance == null) instance = new GameController();
		return instance;
	}
	
	public void showInformation(ArrayList<Idol> idols) {
		for(int i=0;i<idols.size();i++) {
			System.out.println("----------------------------------");
			Idol idol = idols.get(i);
			System.out.println(i+1+") : "+idol.getFullName());
			if(idol instanceof Singable) ((Singable) idol).showSingPoint();
			if(idol instanceof Danceable) ((Danceable) idol).showDancePoint();
			if(idol instanceof Rappable) ((Rappable) idol).showRapPoint();
			idol.greeting();
		}
		System.out.println("----------------------------------");
	}
	
	public ArrayList<Idol> getIdols() {
		return idols;
	}
	
	public void showCurrentIdols() {
		updateAuraPoint();
		System.out.println("==================================================");
		System.out.println("This is the idols in your current group ٩(ˊᗜˋ*)و");
		System.out.println("❀❀❀ You have "+auraPoint+" Aura Point ❀❀❀");
		for(Idol idol:idols) {
			System.out.println("-------------------------------------");
			System.out.println("˚ʚ♡ɞ˚ "+idol.getFullName()+" ˚ʚ♡ɞ˚");
			if(idol instanceof Singable) ((Singable) idol).sing();
			if(idol instanceof Danceable) ((Danceable) idol).dance();
			if(idol instanceof Rappable) ((Rappable) idol).rap(); 
				
			if(idol instanceof Singable) ((Singable) idol).showSingPoint();
			if(idol instanceof Danceable) ((Danceable) idol).showDancePoint();
			if(idol instanceof Rappable) ((Rappable) idol).showRapPoint();
		} 
		
		System.out.println("==================================================");
	}
	
	public void showMission(int auraPoint) {
//		String text = """
//░░░░▄▄▄▄▀▀▀▀▀▀▀▀▄▄▄▄▄▄
//░░░░█░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░▀▀▄
//░░░█░░░▒▒▒▒▒▒░░░░░░░░▒▒▒░░█
//░░█░░░░░░▄██▀▄▄░░░░░▄▄▄░░░█
//░▀▒▄▄▄▒░█▀▀▀▀▄▄█░░░██▄▄█░░░█
//█▒█▒▄░▀▄▄▄▀░░░░░░░░█░░░▒▒▒▒▒█
//█▒█░█▀▄▄░░░░░█▀░░░░▀▄░░▄▀▀▀▄▒█
//░█▀▄░█▄░█▀▄▄░▀░▀▀░▄▄▀░░░░█░░█
//░░█░░▀▄▀█▄▄░█▀▀▀▄▄▄▄▀▀█▀██░█
//░░░█░░██░░▀█▄▄▄█▄▄█▄████░█
//░░░░█░░░▀▀▄░█░░░█░███████░█
//░░░░░▀▄░░░▀▀▄▄▄█▄█▄█▄█▄▀░░█
//░░░░░░░▀▄▄░▒▒▒▒░░░░░░░░░░█
//░░░░░░░░░░▀▀▄▄░▒▒▒▒▒▒▒▒▒▒░█
//░░░░░░░░░░░░░░▀▄▄▄▄▄░░░░░█
//				""";
		
		String text = "✧･ﾟ: *✧･ﾟ:* Your mission : "+auraPoint+" Aura Point *:･ﾟ✧*:･ﾟ✧";
		System.out.println(text);
	}
	
	public void updateAuraPoint() {
		auraPoint = 0;
		for(Idol idol:idols) {
			auraPoint += idol.getAuraPoint();
		}
	}
	
	public int getErrorPoint() {
		return errorPoint;
	}

	public void setErrorPoint(int errorPoint) {
		this.errorPoint = errorPoint;
	}

	public int getAuraPoint() {
		updateAuraPoint();
		return auraPoint;
	}

	public void setAuraPoint(int auraPoint) {
		this.auraPoint = auraPoint;
	}

	public void showErrorPoint() {
		System.out.println("Your error point = "+errorPoint);
	}
	
	
}
