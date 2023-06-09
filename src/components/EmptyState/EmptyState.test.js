import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import EmptyState from "./EmptyState";

it('should render title props', () => {
    render(<EmptyState title="Título" />)
    expect(screen.getByText('Título')).toBeInTheDocument()
})