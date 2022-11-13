import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { POKEMONS } from "../mock-pokemon-list";
import { Pokemon } from "../pokemon";

@Component({
  selector: "app-detail-pokemon",
  templateUrl: "./detail-pokemon.component.html",
  styles: [],
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.pokemonList = POKEMONS;
    // console.log(this.router.snapshot.paramMap);
    const pokemonId: string | null = this.route.snapshot.paramMap.get("id");
    // console.log(pokemonId);
    if (pokemonId) {
      this.pokemon = this.pokemonList.find(
        (pokemon) => pokemon.id == +pokemonId
      );
    } else {
      this.pokemon = undefined;
    }
  }

  goToPokemonList() {
    this.router.navigate(["/pokemons"]);
  }
}
