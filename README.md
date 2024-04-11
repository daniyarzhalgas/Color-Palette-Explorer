# Color Palette Explorer

[Color Palette Explorer](https://color-palette-explorer.vercel.app/) is a web application that allows users to explore, create, and share color palettes. Whether you're a designer looking for inspiration or someone who loves playing with colors, this tool is for you!

## Features

- **Color Selection:** Users can choose colors from a wide spectrum using an intuitive color picker or predefined color palettes.
  
- **Enter a Color:** Users can also manually enter a specific color using HEX, RGB, or HSL values.It works with any sort of color name, and when it writes a non-existent color, the software understands and does not modify the color.
  
- **Random Color:** Generate random colors for quick inspiration and exploration.The Random Color method generates a random color in HEX format by using characters from the string  `symbols = "0123456789ABCDEF";`.She selects random characters from this string to form a six-digit color value.
  
- **Combine Colors (2 colors):** Mix and combine two selected colors to see the resulting blend.The combine Color method received two RGB-formatted colors and returns the average color calculated by averaging the values of each channel (red, green, and blue).
  
- **Color Customization:** The application provides the ability to adjust the hue, saturation, and brightness of each color to create unique color combinations.
  
- **Creating Color Schemes:** Users can create complementary or analogous color schemes based on selected base colors.The color scheme function raises and reduces the values of each channel (red, green, and blue) by 20 relative to the specified base color, resulting in comparable hues in the palette. This approach allows you to create color schemes that are harmonious with the chosen color.
  
- **Saving and Sharing Palettes:** Save your created color palettes and share them with others to inspire or get feedback.Palette data is saved in the browser's local storage for sharing and saving purposes. Window.location.href is then used to create a unique URL including data about color.You can send a link to a friend via Messenger or copy this URL and share it.
## Known issues
In older browsers, the color picker may not display correctly and web applications may not work correctly on the phone device. I am working on fixing this problem.



## Contact
For questions or suggestions, feel free to reach out to daniyarzhalgas05@gmail.com.
