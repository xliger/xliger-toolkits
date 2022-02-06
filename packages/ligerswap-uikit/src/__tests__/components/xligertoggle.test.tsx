import React from "react";
import { renderWithTheme } from "../../testHelpers";
import XLigerToggle from "../../components/XLigerToggle/XLigerToggle";

const handleChange = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<XLigerToggle checked onChange={handleChange} scale="md" />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      position: relative;
      display: inline-block;
    }

    .c0:label:before {
      content: none;
    }

    .c0 .xligers {
      position: absolute;
      -webkit-transition: 0.6s cubic-bezier(0.175,0.885,0.32,1.275);
      transition: 0.6s cubic-bezier(0.175,0.885,0.32,1.275);
    }

    .c0 .xliger {
      background: #e27c31;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      position: absolute;
      -webkit-transition: 0.4s ease;
      transition: 0.4s ease;
      top: 2px;
      left: 4px;
      box-shadow: 0 1.5px 0 1.5px #fbbe7c;
    }

    .c0 .xliger:nth-child(1) {
      background: #FFFFFF;
      box-shadow: 0 1.5px 0 1.5px #BDC2C4;
    }

    .c0 .xliger:nth-child(2) {
      left: 0;
      top: -1px;
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      transform: scale(0);
      -webkit-transition: 0.2s ease 0.2s;
      transition: 0.2s ease 0.2s;
    }

    .c0 .xliger:nth-child(3) {
      top: -6px;
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      transform: scale(0);
      -webkit-transition: 0.2s ease 0.2s;
      transition: 0.2s ease 0.2s;
    }

    .c1 {
      height: 40px;
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      width: 40px;
    }

    .c1:focus + label {
      box-shadow: 0px 0px 0px 1px #7645D9,0px 0px 0px 4px rgba(118,69,217,0.6);
    }

    .c1:checked + label .xligers {
      -webkit-transform: translateX(24px);
      -ms-transform: translateX(24px);
      transform: translateX(24px);
    }

    .c1:checked + label .xliger:nth-child(1) {
      background: #e27c31;
      box-shadow: 0 1.5px 0 1.5px #fbbe7c;
      -webkit-transition-delay: 0.2s;
      transition-delay: 0.2s;
    }

    .c2 {
      width: 56px;
      height: 32px;
      background: #31D0AA;
      box-shadow: inset 0px 2px 2px -1px rgba(74,74,104,0.1);
      display: inline-block;
      border-radius: 24px;
      position: relative;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
      -webkit-transform-origin: 20% center;
      -ms-transform-origin: 20% center;
      transform-origin: 20% center;
      cursor: pointer;
    }

    <div
        class="c0"
        scale="md"
      >
        <input
          checked=""
          class="c1"
          id="xliger-toggle"
          scale="md"
          type="checkbox"
        />
        <label
          class="c2"
          for="xliger-toggle"
          scale="md"
        >
          <div
            class="xligers"
          >
            <div
              class="xliger"
            />
            <div
              class="xliger"
            />
            <div
              class="xliger"
            />
            <div
              class="butter"
            />
          </div>
        </label>
      </div>
    </DocumentFragment>
  `);
});

it("renders correctly scale sm", () => {
  const { asFragment } = renderWithTheme(<XLigerToggle checked onChange={handleChange} scale="sm" />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      position: relative;
      display: inline-block;
    }

    .c0:label:before {
      content: none;
    }

    .c0 .xligers {
      position: absolute;
      -webkit-transition: 0.6s cubic-bezier(0.175,0.885,0.32,1.275);
      transition: 0.6s cubic-bezier(0.175,0.885,0.32,1.275);
    }

    .c0 .xliger {
      background: #e27c31;
      border-radius: 50%;
      width: 14px;
      height: 14px;
      position: absolute;
      -webkit-transition: 0.4s ease;
      transition: 0.4s ease;
      top: 2px;
      left: 4px;
      box-shadow: 0 1px 0 1px #fbbe7c;
    }

    .c0 .xliger:nth-child(1) {
      background: #FFFFFF;
      box-shadow: 0 1px 0 1px #BDC2C4;
    }

    .c0 .xliger:nth-child(2) {
      left: 0;
      top: 0px;
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      transform: scale(0);
      -webkit-transition: 0.2s ease 0.2s;
      transition: 0.2s ease 0.2s;
    }

    .c0 .xliger:nth-child(3) {
      top: -3px;
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      transform: scale(0);
      -webkit-transition: 0.2s ease 0.2s;
      transition: 0.2s ease 0.2s;
    }

    .c1 {
      height: 40px;
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      width: 40px;
    }

    .c1:focus + label {
      box-shadow: 0px 0px 0px 1px #7645D9,0px 0px 0px 4px rgba(118,69,217,0.6);
    }

    .c1:checked + label .xligers {
      -webkit-transform: translateX(14px);
      -ms-transform: translateX(14px);
      transform: translateX(14px);
    }

    .c1:checked + label .xliger:nth-child(1) {
      background: #e27c31;
      box-shadow: 0 1px 0 1px #fbbe7c;
      -webkit-transition-delay: 0.2s;
      transition-delay: 0.2s;
    }

    .c2 {
      width: 36px;
      height: 20px;
      background: #31D0AA;
      box-shadow: inset 0px 2px 2px -1px rgba(74,74,104,0.1);
      display: inline-block;
      border-radius: 24px;
      position: relative;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
      -webkit-transform-origin: 20% center;
      -ms-transform-origin: 20% center;
      transform-origin: 20% center;
      cursor: pointer;
    }

    <div
        class="c0"
        scale="sm"
      >
        <input
          checked=""
          class="c1"
          id="xliger-toggle"
          scale="sm"
          type="checkbox"
        />
        <label
          class="c2"
          for="xliger-toggle"
          scale="sm"
        >
          <div
            class="xligers"
          >
            <div
              class="xliger"
            />
            <div
              class="xliger"
            />
            <div
              class="xliger"
            />
            <div
              class="butter"
            />
          </div>
        </label>
      </div>
    </DocumentFragment>
  `);
});
