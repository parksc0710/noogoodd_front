/** @type {import('next').NextConfig} */
const nextConfig = {
    // 리액트의 엄격모드 활성화
    reactStrictMode: true,

    // 일반적으로 보안 취약점으로 취급되는 X-Powered_By 헤더 제거
    poweredByHeader: false,

    // 빌드 시에 eslint무시
    eslint: {
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig