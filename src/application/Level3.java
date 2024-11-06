package application;

import java.util.Scanner;

import base.Danceable;
import base.Idol;
import base.Rappable;
import base.Singable;
import logic.GameController;

public class Level3 implements BaseLevel {
	GameController gameController;
	int expectedAuraPoint = 150;
	
	public Level3() {
		gameController = GameController.getInstance();
	}
	
	@Override
	public void play() {
		System.out.println("==================================================");
		System.out.println("We've brought on a new trainer to unlock the full potential of our idols.");
		System.out.println("However, only one can be chosen to undergo this exclusive training.");
		System.out.println("The chosen idol will be doubled all of her points.");
		
		gameController.showMission(expectedAuraPoint);
		gameController.showInformation(gameController.getIdols());
		
		int option = -1;
        boolean validInput = false;
        
        Scanner scanner = new Scanner(System.in);

        while (!validInput) {
            System.out.print("Type the number of your chosen idol: ");

            if (scanner.hasNextInt()) {
                option = scanner.nextInt();
                
                // Check if the option is within valid bounds and hasn't been selected before
                if (option >= 1 && option <= gameController.getIdols().size()) {
                    validInput = true;
                } else {
                    System.out.println("Try again...");
                }
            } else {
                System.out.println("Try again...");
                scanner.next(); // Clear the invalid input
            }
        }
        
        Idol idol = gameController.getIdols().get(option-1);
        if(idol instanceof Singable) ((Singable) idol).setSingPoint(((Singable) idol).getSingPoint()*2);
        if(idol instanceof Danceable) ((Danceable) idol).setDancePoint(((Danceable) idol).getDancePoint()*2);
        if(idol instanceof Rappable) ((Rappable) idol).setRapPoint(((Rappable) idol).getRapPoint()*2);
        
        System.out.println("You have chosen "+((Idol) idol).getFullName()+".");
        
        gameController.showCurrentIdols();
		gameController.setErrorPoint(gameController.getErrorPoint()+Math.abs(expectedAuraPoint-gameController.getAuraPoint()));
		gameController.showErrorPoint();
		
	}
}
