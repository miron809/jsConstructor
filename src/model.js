import image from '../assets/cat.png'
import {TitleBlock, Block, ImageBlock, TextBlock, TextColumnsBlock} from "./classes/blocks";

export const model = [
  new TitleBlock(
    'JS Constructor',
    {
      tag: 'h1',
      styles: 'text-align: center; margin: 15px, 10px;'
    }
  ),
  new ImageBlock(
    image,
    {
      styles: 'padding: 2rem 0; display: flex; justify-content: center;',
      alt: 'image',
      imageStyles: 'max-width: 400px; height: auto;'
    }
  ),
  new TextBlock(
    'Test Text',
    {
      styles: 'background: darkblue; color: yellow;'
    }
  ),
  new TextColumnsBlock(
    [
      '1 text',
      '2 text',
      '3 text'
    ],
    {
      styles: 'padding: 1rem; background: #ccc'
    }
  ),
]
