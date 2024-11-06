package application;

import java.util.ArrayList;
import java.util.Scanner;

import base.Idol;
import character.Dancer;
import character.Rapper;
import logic.GameController;

public class Level4 implements BaseLevel {
	ArrayList<Idol> idols;
	GameController gameController;
	int expectedAuraPoint = 150;
	
	public Level4() {
		gameController = GameController.getInstance();
		
		idols = new ArrayList<>();
		
		Dancer idol1 = new Dancer("G-chan",30);
		Rapper idol2 = new Rapper("H-chan",1);
		
		idols.add(idol1);
		idols.add(idol2);
	}
	
	@Override
	public void play() {
		System.out.println("==================================================");
		System.out.println("A scandal has struck our idol group, and to survive, we have to make a hard choice.");
		System.out.println("Even though none of them may be at fault, we need to place the blame on one girl to save the group's image.");
		System.out.println("Choose one idol to take the fall, and bring in a new member to replace her!!");
		
		gameController.showMission(expectedAuraPoint);
		System.out.println("\nEliminate 1 idol from your group...");
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
        
        Idol oldIdol = gameController.getIdols().get(option-1);
        System.out.println("-------------------------------------");
        System.out.println("You have chosen "+oldIdol.getName()+", even though she did nothing wrong.");
        System.out.println(oldIdol.getFullName()+" has been eliminated.");
        System.out.println("-------------------------------------");
        
		System.out.println("Now, choose a new girl to replace "+oldIdol.getName()+".");
		gameController.showInformation(idols);
		
		option = -1;
		validInput = false; 
		
		while (!validInput) {
            System.out.print("Type the number of your chosen idol: ");

            if (scanner.hasNextInt()) {
                option = scanner.nextInt();
                
                // Check if the option is within valid bounds and hasn't been selected before
                if (option >= 1 && option <= idols.size()) {
                    validInput = true;
                } else {
                    System.out.println("Try again...");
                }
            } else {
                System.out.println("Try again...");
                scanner.next(); // Clear the invalid input
            }
        }
        
        Idol newIdol = idols.get(option-1);
		
        System.out.println(newIdol.getName()+" has joined the group, allowing our idol group to move forward ~");
        gameController.getIdols().remove(oldIdol);
        gameController.getIdols().add(newIdol);
        
        gameController.showCurrentIdols();
		gameController.setErrorPoint(gameController.getErrorPoint()+Math.abs(expectedAuraPoint-gameController.getAuraPoint()));
		gameController.showErrorPoint();
        
	}

}
