package application;

import java.util.ArrayList;
import java.util.Scanner;

import base.*;
import character.*;

public class Main {

	public static void main(String[] args) {
		Level1 level1 = new Level1();
		Level2 level2 = new Level2();
		Level3 level3 = new Level3();
		Level4 level4 = new Level4();
		
		Scanner scanner = new Scanner(System.in);
		playLevel(level1,scanner);
		playLevel(level2,scanner);
		playLevel(level3,scanner);
		playLevel(level4,scanner);
		
		scanner.close();
	}
	
	private static void playLevel(BaseLevel baseLevel,Scanner scanner) {
		System.out.println("Press any keys to continue.");
		if (scanner.hasNextLine()) {
            scanner.nextLine();
        }
		baseLevel.play();
	}

}
