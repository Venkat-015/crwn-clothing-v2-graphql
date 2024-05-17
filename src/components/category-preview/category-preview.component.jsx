
import ProductCard from '../product-card/product-card.component';
import Spinner from "../../components/spinner/spinner.component"
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles';

import { Fragment } from 'react';

const CategoryPreview = ({ title, products,loading}) => {
  return (<Fragment>
      {
    loading? (<Spinner />):(<Fragment>
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer></Fragment>)}</Fragment>
  );
};

export default CategoryPreview;
