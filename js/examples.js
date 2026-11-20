export const PRESETS={
 cylinder:{coords:'cylindrical',eq:'z = 5',bounds:{theta:['0','2*pi'],r:['0','3'],z:['0','5']},shape:'Cylinder',exact:'45π'},
 sphere:{coords:'spherical',eq:'ρ = 3',bounds:{theta:['0','2*pi'],phi:['0','pi'],rho:['0','3']},shape:'Sphere',exact:'36π'},
 cone:{coords:'cylindrical',eq:'z = 5*(1-r/3)',bounds:{theta:['0','2*pi'],r:['0','3'],z:['0','5*(1-r/3)']},shape:'Cone',exact:'15π'},
 paraboloid:{coords:'cylindrical',eq:'z = 4 - r^2',bounds:{theta:['0','2*pi'],r:['0','2'],z:['0','4-r^2']},shape:'Paraboloid',exact:'8π'},
 custom:{coords:'cylindrical',eq:'z = 5',bounds:{theta:['0','2*pi'],r:['0','3'],z:['0','5']},shape:'Custom region'}
};
