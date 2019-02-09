import React from 'react';

export function LanguagePicker(props) {

  function handleChange(e) {
    const language = e.target.options[e.target.selectedIndex].value
    props.handleChange(language)
  }

  return (
<React.Fragment>
  <form>
		<select onChange={handleChange}>
		  <option value=''>Choose Language</option>
				<option value="ActionScript">ActionScript</option>
				<option value="C">C</option>
				<option value="C#">C#</option>
				<option value="C++">C++</option>
				<option value="Clojure">Clojure</option>
				<option value="CoffeeScript">CoffeeScript</option>
				<option value="CSS">CSS</option>
				<option value="Go">Go</option>
				<option value="Haskell">Haskell</option>
				<option value="HTML">HTML</option>
				<option value="Java">Java</option>
				<option value="JavaScript">JavaScript</option>
				<option value="Lua">Lua</option>
				<option value="Matlab">Matlab</option>
				<option value="Objective-C">Objective-C</option>
				<option value="Perl">Perl</option>
				<option value="PHP">PHP</option>
				<option value="Python">Python</option>
				<option value="R">R</option>
				<option value="Ruby">Ruby</option>
				<option value="Scala">Scala</option>
				<option value="Shell">Shell</option>
				<option value="Swift">Swift</option>
				<option value="TeX">TeX</option>
				<option value="Vim script">Vim script</option>
			</select>
		</form>
	</React.Fragment>
)}
