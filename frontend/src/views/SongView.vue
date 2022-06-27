<template>
	<v-container>
		<v-row>
			<v-col class="col-sm-12 col-md-6 offset-md-3">
				<v-sheet max-height="10vh" rounded="lg">
					<v-icon large color="darken-2">mdi-arrow-expand-all</v-icon>
					Ikonice goes here
				</v-sheet>
			</v-col>
			<v-col class="col-sm-12 col-md-6 offset-md-3">
				<v-sheet rounded="lg">
					<pre>{{songData}}</pre>
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
export default {
	components: {
	},
	data () {
		return {
			songData: `
				PISMO MOJA – Oliver
				[intro]    B   F   Gm   D#  //  B  F  D#
				B     F    Gm   D#
				Pismo moja iscidi san dušu u tebe
				B     F    Gm   D#
				I pustija te u svit zbog ljubavi moje
				B     F
				Nesritne da mi svitliš put dok tražim je.

				Svu lipotu svita ja stavija san tu
				U ovu šaku riči u moju nevoju
				I sudbinu da mi svitliš put dok tražim je,

				Gm        D#                      B         F D# F-F#-Gm
				Jer ova duša dalje   bez nje više ne može...
				REF x2

				Gm    D#       B   (F)
				Pismo moja leti mi do nje
				Gm    D#        B   (F)
				I šapni joj riči najlipše
				D#      F
				Da još uvik nosin za nju
				Dm     Gm
				Po srid srca živu ranu
				* D#    F // ** D#  F  B
				koju samo ona ličit zna.

				--- đitra solo s akordima 1. verse---
				Svu lipotu svita ....
				REF samo strumm
				REF normalno
				B       D#  F           x2
				znaaaaaa….
				pismo mojaaa..    B
			`,
		}
	},
	methods: {
		sampleMethod(){
		},
	},
	created() {
	}
}
</script>