interface LocationIconProps {
    className?: string
}

export default function LocationIcon({ className }: LocationIconProps) {
    return (
        <svg className={className} viewBox="0 0 11 15">
            <g>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 5.53964C11 6.86718 10.5364 8.08565 9.76331 9.03975L5.46158 15L1.03129 8.78928H1.04525C0.387723 7.87645 0 6.75365 0 5.53964C0 2.48018 2.46243 0 5.5 0C8.53757 0 11 2.48018 11 5.53964ZM8 5.53964C8 6.9303 6.88071 8.05766 5.5 8.05766C4.11929 8.05766 3 6.9303 3 5.53964C3 4.14898 4.11929 3.02162 5.5 3.02162C6.88071 3.02162 8 4.14898 8 5.53964Z"
                ></path>
            </g>
        </svg>
    )
}
