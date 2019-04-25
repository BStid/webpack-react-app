import React from "react";
import ArticleList from "../ArticleData/ArticleList/ArticleList";

import renderer from "react-test-renderer";

describe("ArticleList", () => {
  const testProps = {
    articles: {
      a: { id: "a" },
      b: { id: "b" }
    },
    articleActions: {
      lookupAuthor: jest.fn(() => ({}))
    }
  };
  it("renders <ArticleList/> correctly", () => {
    const tree = renderer.create(<ArticleList {...testProps} />).toJSON();
    expect(tree).toMatchSnapshot();
    // expect(tree.children.length).toBe(2);
    expect(tree.length).toBe(2);
  });
});
