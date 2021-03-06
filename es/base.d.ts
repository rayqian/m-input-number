import React from 'react';
declare function noop(): void;
declare function defaultParser(input: string): string;
export interface PropsType {
    style?: any;
    onChange?: (e: any) => void;
    readOnly?: boolean;
    disabled?: boolean;
    onFocus?: (e?: any) => void;
    onBlur?: (e: any) => void;
    max?: number;
    min?: number;
    step?: string | number;
    parser?: (v: any) => void;
    precision?: number;
    value?: number;
    defaultValue?: number;
    autoFocus?: boolean;
    returnKeyType?: string;
}
export interface StateType {
    value: number;
    inputValue?: number;
    focused?: boolean;
}
export default abstract class BaseComponent<P extends PropsType = PropsType, S extends StateType = StateType> extends React.Component<P, S> {
    static defaultProps: {
        max: number;
        min: number;
        step: number;
        style: {};
        onChange: typeof noop;
        onFocus: typeof noop;
        onBlur: typeof noop;
        parser: typeof defaultParser;
        returnKeyType: string;
    };
    autoStepTimer: any;
    constructor(props: P);
    componentWillReceiveProps(nextProps: P): void;
    componentWillUnmount(): void;
    abstract getValueFromEvent(e: any): any;
    onChange: (e: any) => void;
    onFocus: (...args: any[]) => void;
    onBlur: (e: any, ...args: any[]) => void;
    getCurrentValidValue: (value: any) => any;
    getValidValue: (value: any) => any;
    setValue: (v: any, callback?: any) => void;
    getPrecision: (value: any) => number;
    getMaxPrecision: (currentValue: any, ratio?: number) => number;
    getPrecisionFactor: (currentValue: any, ratio?: number) => number;
    toPrecisionAsStep: (num: any) => any;
    isNotCompleteNumber: (num: any) => boolean;
    toNumber: (num: any) => any;
    toNumberWhenUserInput: (num: any) => any;
    stepCompute: (type: "up" | "down", val: any, rat: any) => any;
    step: (type: "up" | "down", e: any, ratio?: number) => boolean;
    stop: () => void;
    action: (type: "up" | "down", e: any, ratio?: any, recursive?: any) => void;
    down: (e: any, ratio?: any, recursive?: any) => void;
    up: (e: any, ratio?: any, recursive?: any) => void;
}
export {};
