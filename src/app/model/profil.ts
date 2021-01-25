export interface Profil {
	_id?:number | string;
	nom:string;
	prenom:string;
	specialite:Array<string>;
	promo:string;
	mail?:string;
	age:number;
	photo?:string;
}
