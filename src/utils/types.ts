import {ChangeEvent} from "react";

export type TOnChange = (e: ChangeEvent<HTMLInputElement>) => void | (() => {})
