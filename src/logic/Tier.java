package logic;

import character.Rapper;
import character.Singer;

public enum Tier {
	Karaoke, LiveMusic, Opera,
	NoName, Global;
	
	public static Tier getSingerTier(Singer singer) {
		if(singer.getSingPoint()>=30) return Opera;
		else if(singer.getSingPoint()>=20) return LiveMusic;
		else return Karaoke;
	}
	
	public static Tier getRapperTier(Rapper rapper) {
		if(rapper.getRapPoint()>=20) return Global;
		else return NoName;
	}
}
