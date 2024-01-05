interface PhoneIconProps {
    className?: string
}

export default function PhoneIcon({ className }: PhoneIconProps) {
    return (
        <svg className={className} viewBox="0 0 15 15">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.67736 4.9297L1.23883 1.48941C1.46051 1.26772 1.68198 1.04581 1.90355 0.823798L1.90388 0.823467L1.90414 0.823214C2.12597 0.60094 2.34791 0.378555 2.5703 0.156171C2.77589 -0.0494172 3.10765 -0.0529466 3.31412 0.149995L5.99294 2.83147C6.19765 3.03617 6.19765 3.37323 5.9903 3.5797L5.40353 4.16558L4.85736 4.71176C4.7903 4.7797 4.72941 4.85205 4.67736 4.9297ZM7.50618 10.5335C6.94324 10.0491 6.40324 9.5347 5.87912 9.01147C5.35589 8.4847 4.84324 7.94647 4.35794 7.38088C3.96089 6.92205 3.88324 6.25764 4.09059 5.69823L0.561179 2.16794C-0.260291 3.01235 -0.155291 5.10617 0.744709 6.94588C1.13118 7.74176 1.63236 8.45999 2.1503 9.14294C2.66736 9.82058 3.23471 10.4612 3.83206 11.0629C4.43118 11.6638 5.06824 12.2338 5.74765 12.7509C6.43059 13.2706 7.15059 13.7682 7.94118 14.1538C9.78353 15.0529 11.8782 15.1518 12.7218 14.3294L9.19147 10.7991C8.63206 11.0065 7.96677 10.9297 7.50618 10.5335ZM12.0582 8.89588L14.7371 11.5756C14.9426 11.7812 14.9382 12.1138 14.7309 12.3194C14.2853 12.7632 13.8415 13.2062 13.3968 13.6518L9.95912 10.2123C10.0368 10.1576 10.11 10.0985 10.1771 10.0315L10.7197 9.48617L11.3082 8.89852H11.31C11.5156 8.69294 11.8527 8.69294 12.0582 8.89588Z"
            ></path>
        </svg>
    )
}