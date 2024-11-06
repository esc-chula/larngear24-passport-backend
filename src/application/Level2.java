package application;

import java.util.ArrayList;
import java.util.Scanner;

import base.Idol;
import base.Singable;
import logic.GameController;

public class Level2 implements BaseLevel {
	GameController gameController;
	int expectedAuraPoint = 70;
	
	public Level2() {
		gameController = GameController.getInstance();
	}
	
	@Override
	public void play() {
		System.out.println("==================================================");
		System.out.println("Choose 1 idol to participate in the singing competition.");
		System.out.println("But as you know , we must choose idol that can sing.");
		System.out.println("The chosen idol will be doubled her singing point.");
		
		ArrayList<Idol> singingIdols = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
		
		for (Idol idol : gameController.getIdols()) {
		    if (idol instanceof Singable) {
		        singingIdols.add((Idol) idol);
		    }
		}
		
		gameController.showMission(expectedAuraPoint);
		gameController.showInformation(singingIdols);
		
		if(singingIdols.size()==0) {
			System.out.println("Unluckily, all of your idols cannot sing.");

		    System.out.println("Press any key to continue.");
			scanner.nextLine();
		} else {
			int option = -1;
	        boolean validInput = false;

	        while (!validInput) {
	            System.out.print("Type the number of your chosen idol: ");

	            if (scanner.hasNextInt()) {
	                option = scanner.nextInt();
	                
	                // Check if the option is within valid bounds and hasn't been selected before
	                if (option >= 1 && option <= singingIdols.size()) {
	                    validInput = true;
	                } else {
	                    System.out.println("Try again...");
	                }
	            } else {
	                System.out.println("Try again...");
	                scanner.next(); // Clear the invalid input
	            }
	        }
	        
	        Singable idol = (Singable) singingIdols.get(option-1);
	        idol.setSingPoint(idol.getSingPoint()*2);
	        
	        System.out.println("You have chosen "+((Idol) idol).getFullName()+".");
		}
        gameController.showCurrentIdols();
		gameController.setErrorPoint(gameController.getErrorPoint()+Math.abs(expectedAuraPoint-gameController.getAuraPoint()));
		gameController.showErrorPoint();
		
	}
}
