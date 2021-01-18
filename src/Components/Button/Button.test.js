import React from "react";
import { render, cleanup } from "@testing-library/react";
import Button from "./Button";
afterEach(cleanup);

it("renders correctly", () => {
	const { asFragment } = render(<Button onClick={() => {}}>Button</Button>);
	expect(
		asFragment(<Button onClick={() => {}}>Button</Button>)
	).toMatchSnapshot();
});
