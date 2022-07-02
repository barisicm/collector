/*
* This store is currently being used as fake backend.
* */

const state = {
    collections: [
        {
            id: 1,
            name: "Domaćica 1",
            songList: [
                {
                    id: 1,
                    name:"Pismo Moja",
                    artist:"Oliver Dragojević",
                    lyrics:`
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
            `
                },
                {
                    id: 2,
                    name:"Imala je lijepu rupicu na bradi",
                    artist:"Oliver Dragojević",
                    lyrics:``
                },
                {
                    id: 3,
                    name:"Mjerkam te mjerkam",
                    artist:"Zdravko Čolić",
                    lyrics:``
                }
            ]
        },
        {
            id: 2,
            name: "Poseban set",
            songList: [
                {
                    id: 1,
                    name:"Pismo Moja",
                    artist:"Oliver Dragojević",
                    lyrics:`
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
            `
                },
            ]
        },
        {
            id: 3,
            name: "Najbolje pjesme",
            songList: [
                {
                    id: 1,
                    name:"Pismo Moja",
                    artist:"Oliver Dragojević",
                    lyrics:`
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
            `
                },
                {
                    id: 2,
                    name:"Pismo Moja",
                    artist:"Oliver Dragojević",
                    lyrics:`
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
            `
                },
            ]
        }
    ]
}

const getters = {
    getCollections: () => {
        return state.collections
    },
    getCollection: (state) => (id) => {
        return state.collections.find(collection => collection.id === id)
    },
}

const actions = {
    addCollections(state, collection) {
        state.collections.push(collection)
    },
    deleteCollections(state, collection) {
        var collectionIndex = state.collections.indexOf(collection)
        state.collections = state.collections.splice(collectionIndex, 1)
    },
    updateCollections(state, collection) {
        var collectionIndex = state.collections.indexOf(collection)
        state.collections[collectionIndex] = collection
    }
}

export default {
    state,
    getters,
    actions
}