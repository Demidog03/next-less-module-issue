import type { NextConfig } from "next";
import withLess from "next-with-less";
import withAntdLess from "next-plugin-antd-less";

const nextConfig: NextConfig = withAntdLess(withLess({
  reactStrictMode: false,
}));

export default nextConfig;