varying vec2 vUv;
void main()	{
	// vec2 newUV = (vUv - vec2(0.5))*resolution.xy + vec2(0.5);
	gl_FragColor = vec4(vUv,1.,1.);
}