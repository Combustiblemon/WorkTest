export type Size = "small" | "big"


const test = ["gray", "blue"] as const
const test1 = ["gray", "blue"]

interface ColorTypes {
    [index: string]: {
        rgb: string,
        rgbText: string,
        rgbaHover: string,
        rgbaActive: string,
        padding: string
    }
}

export const initializeColorType = (colors: ColorTypes) => {
    const keys = [...Object.keys(colors)] as const
    type test2 = typeof keys[number]
    console.log(keys);

}

export type Color = typeof test[number]