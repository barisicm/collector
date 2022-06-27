/*
* This store is currently being used as fake backend.
* */

const state = {
    songs: [
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
}

const getters = {
    getSongs: () => {
        return state.songs
    },
    getSong: (state) => (id) => {
        return state.songs.find(song => song.id === id)
    },
}

const mutations = {
}

const actions = {
    addSong(state, song) {
        state.songs.push(song)
    },
    deleteSong(state, song) {
        var songIndex = state.songs.indexOf(song)
        state.songs = state.songs.splice(songIndex, 1)
    },
    updateSong(state, song) {
        var songIndex = state.songs.indexOf(song)
        state.songs[songIndex] = song
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}