import deburr from "lodash.deburr";

export default function slugify(str) {
	if (!str) return;
	return deburr(str)
		.toLowerCase()
		.replace(", ", "-")
		.replace(/ /g, "_")
		.replace(/[^a-z\-\_]/g, "")
		.toLowerCase();
}
