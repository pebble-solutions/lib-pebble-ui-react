/// <reference types="react" />
export declare function getMenuItems(): {
    label: string;
    target: string;
    icon: import("react").ForwardRefExoticComponent<Omit<import("react").SVGProps<SVGSVGElement>, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
}[];
export declare function getMenuItemsModal(): ({
    label: string;
    target: string;
    icon: import("react").ForwardRefExoticComponent<Omit<import("react").SVGProps<SVGSVGElement>, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
    className?: undefined;
} | {
    label: string;
    target: string;
    icon: import("react").ForwardRefExoticComponent<Omit<import("react").SVGProps<SVGSVGElement>, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
    className: string;
})[];
