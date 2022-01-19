import About from "../components/About";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Legal from "../components/Legal";
import Navbar from "../components/Navbar";
// import Reviews from "../components/Reviews";
import TestOptions from "../components/TestOptions";
import styled, { css } from "styled-components";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const IntroShape = styled.div`
  ${Shape}
  background-color: white;
  clip-path: polygon(
    100% 0%,
    0% 0%,
    0% 22.5%,
    1% 22.49%,
    2% 22.47%,
    3% 22.44%,
    4% 22.4%,
    5% 22.34%,
    6% 22.27%,
    7% 22.19%,
    8% 22.1%,
    9% 22%,
    10% 21.89%,
    11% 21.77%,
    12% 21.64%,
    13% 21.5%,
    14% 21.35%,
    15% 21.2%,
    16% 21.04%,
    17% 20.87%,
    18% 20.7%,
    19% 20.53%,
    20% 20.35%,
    21% 20.18%,
    22% 20%,
    23% 19.82%,
    24% 19.64%,
    25% 19.47%,
    26% 19.29%,
    27% 19.12%,
    28% 18.96%,
    29% 18.8%,
    30% 18.65%,
    31% 18.5%,
    32% 18.36%,
    33% 18.23%,
    34% 18.11%,
    35% 18%,
    36% 17.9%,
    37% 17.8%,
    38% 17.72%,
    39% 17.66%,
    40% 17.6%,
    41% 17.56%,
    42% 17.53%,
    43% 17.51%,
    44% 17.5%,
    45% 17.51%,
    46% 17.53%,
    47% 17.56%,
    48% 17.6%,
    49% 17.66%,
    50% 17.73%,
    51% 17.81%,
    52% 17.9%,
    53% 18%,
    54% 18.11%,
    55% 18.24%,
    56% 18.37%,
    57% 18.51%,
    58% 18.65%,
    59% 18.81%,
    60% 18.97%,
    61% 19.13%,
    62% 19.3%,
    63% 19.47%,
    64% 19.65%,
    65% 19.83%,
    66% 20%,
    67% 20.18%,
    68% 20.36%,
    69% 20.54%,
    70% 20.71%,
    71% 20.88%,
    72% 21.04%,
    73% 21.2%,
    74% 21.36%,
    75% 21.5%,
    76% 21.64%,
    77% 21.77%,
    78% 21.89%,
    79% 22%,
    80% 22.11%,
    81% 22.2%,
    82% 22.28%,
    83% 22.34%,
    84% 22.4%,
    85% 22.44%,
    86% 22.48%,
    87% 22.49%,
    88% 22.5%,
    89% 22.49%,
    90% 22.47%,
    91% 22.44%,
    92% 22.4%,
    93% 22.34%,
    94% 22.27%,
    95% 22.19%,
    96% 22.1%,
    97% 22%,
    98% 21.88%,
    99% 21.76%,
    100% 21.63%
  );
`;

export default function Home() {
  return (
    <>
      <Navbar />
      <CallToAction />
      <TestOptions />
      <About />

      <Footer />
      <Legal />
    </>
  );
}
