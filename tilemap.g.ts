// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`320010000101010101010101010100000000040000000000000000000000000000000000000000000000000000000000000000000000010001010101000000000101010101010000000000000101010101000000000101010101010100000000000000000000000001000000000000000000000101000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000050004000000000000000000000000000000000000000000010000000000000400000000000000000000000000000000000001010101000001010000000000000000000000000000000000000000000101010101000000000500000000040000010101000000000000000000000100000100000000000000000000000000000000000000000000010001010101000001000000000000000000000000040100000000000000000000000000000000010101010100000000000001010000000101000101000000000000000000000101000000000000000101010000000000000000000000000000000500000000040000000101010101000000000000000000000000000000000000000001000000000000000000000000000000010001010101010100000000000001010101000000010100000000000000000000000100000000000000000000010104000000010000000000000000000000000000000000010400000000000400000000000000000001000003000000000000000101010101010000000000040000050002020202000101010100010001010001000000010100040001000000000000000000000000000000000001010101010001000101010100000000000001000000000000000000010401010101000000000000000000000000000000000000000000000000000000000000050000010000000000000000000000000000000000000000000000000000000000000000000000000000010101010101010101010100000000000000000000000000000000000000000202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
2222222222........................................
2.2222....222222......22222....2222222............
2..........22.....................................
2.................................................
2.........................2222..22................
.....22222............222..........2..2...........
...........2.2222..2.............2................
22222......22...22.22..........22.......222.......
.................22222....................2.......
........2.222222......2222...22...........2.......
...22....2.................2................2.....
.....222222...............2222.2.22.2...22...2....
.............22222.2.2222......2.........2.2222...
..............................2...................
...................22222222222....................
..................................................
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
