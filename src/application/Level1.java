package application;

import java.util.ArrayList;
import java.util.Dictionary;
import java.util.HashSet;
import java.util.Hashtable;
import java.util.Scanner;
import java.util.Set;

import base.Danceable;
import base.Idol;
import base.Singable;
import base.Rappable;
import character.Dancer;
import character.Rapper;
import character.Singer;
import character.SuperIdol;
import logic.GameController;

public class Level1 implements BaseLevel {
	ArrayList<Idol> idols;
	GameController gameController;
	int expectedAuraPoint = 30;

	public Level1() {
		Dancer idol1 = new Dancer("A-chan",5);
		Singer idol2 = new Singer("B-chan",4);
		Rapper idol3 = new Rapper("C-chan",6);
		SuperIdol idol4 = new SuperIdol("D-chan",50,4,3);
		Rapper idol5 = new Rapper("E-chan",30);
		Dancer idol6 = new Dancer("F-chan",20);
		
		idols = new ArrayList<Idol>();
		
		idols.add(idol1);
		idols.add(idol2);
		idols.add(idol3);
		idols.add(idol4);
		idols.add(idol5);
		idols.add(idol6);
		
		gameController = GameController.getInstance();
	}
	
	@Override
	public void play() {
		System.out.println("==================================================");
		System.out.println("To be an idol manager, you have to form the idol group first.");
		System.out.println("Choose 3 girls to be your original members!");
		
		gameController.showMission(expectedAuraPoint);
		
		gameController.showInformation(idols);

		Scanner scanner = new Scanner(System.in);
		Dictionary<Integer,String> dict = new Hashtable<>();
		dict.put(1, "first");
		dict.put(2, "second");
		dict.put(3, "third");
		
		Set<Integer> selectedOptions = new HashSet<Integer>();
		
		for(int i=1;i<=3;i++) {
			int option = -1;
            boolean validInput = false;

            while (!validInput) {
                System.out.print("Type the number of your " + dict.get(i) + " idol: ");

                if (scanner.hasNextInt()) {
                    option = scanner.nextInt();
                    
                    // Check if the option is within valid bounds and hasn't been selected before
                    if (option >= 1 && option <= idols.size() && !selectedOptions.contains(option)) {
                        validInput = true;
                    } else {
                        System.out.println("Try again...");
                    }
                } else {
                    System.out.println("Try again...");
                    scanner.next(); // Clear the invalid input
                }
                
            }
            Idol idol = idols.get(option-1);
            gameController.getIdols().add(idol);
            selectedOptions.add(option);
		}
		gameController.showCurrentIdols();
		gameController.setErrorPoint(gameController.getErrorPoint()+Math.abs(expectedAuraPoint-gameController.getAuraPoint()));
		gameController.showErrorPoint();
		
	}
	
}
