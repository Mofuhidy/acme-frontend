import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";

import { HighlightedHeading } from "@/components/ui/highlighted-heading";

function render(text: string) {
  return renderToStaticMarkup(<HighlightedHeading text={text} />);
}

function countBrushes(markup: string) {
  return (markup.match(/<svg/g) ?? []).length;
}

function escapeForRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const cases = [
  { text: "Project Management", highlighted: "Management" },
  { text: "Work together", highlighted: "together" },
  { text: "Customise it to your needs", highlighted: "needs" },
  { text: "100% your data", highlighted: "your data" },
  { text: "Choose Your Plan", highlighted: "Your Plan" },
  { text: "Your work, everywhere you are", highlighted: "you are" },
  { text: "See what our trusted users Say", highlighted: "trusted" },
  { text: "Our sponsors", highlighted: "sponsors" },
];

for (const { text, highlighted } of cases) {
  const markup = render(text);

  assert.equal(
    countBrushes(markup),
    1,
    `expected one brush stroke for "${text}"`,
  );
  assert.match(
    markup,
    new RegExp(
      `<span class="relative z-10">${escapeForRegex(highlighted)}</span>`,
      "i",
    ),
    `expected "${highlighted}" to be the wrapped highlight in "${text}"`,
  );
}

const plainMarkup = render("Hello world");

assert.equal(countBrushes(plainMarkup), 0);

console.log("highlighted heading contract ok");
