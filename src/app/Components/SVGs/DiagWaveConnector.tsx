const DiagWaveConnector = () => {
    return <div>
        <div className="relative py-2">
            <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-64 h-12 transform rotate-12" viewBox="0 0 256 48" preserveAspectRatio="none">
                    <path
                        d="M0,24 Q32,8 64,24 Q96,40 128,24 Q160,8 192,24 Q224,40 256,24"
                        stroke="#345041"
                        strokeWidth="1.5"
                        fill="none"
                        opacity="0.4"
                        strokeLinecap="round"
                    />
                    <path
                        d="M0,28 Q32,12 64,28 Q96,44 128,28 Q160,12 192,28 Q224,44 256,28"
                        stroke="#E7CDBF"
                        strokeWidth="1"
                        fill="none"
                        opacity="0.3"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
        </div>
    </div>
}
export default DiagWaveConnector;