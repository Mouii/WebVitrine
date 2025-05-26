import { trigger, style, transition, animate, state, sequence, AnimationReferenceMetadata, animation, keyframes } from '@angular/animations';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
}

/**
 * Fades in an element in an upwards direction, traveling a percentage of its height.
 * Default parameters: distance '25%', duration '1s', delay '300ms'.
 */
export const fadeInUpAnimation: AnimationReferenceMetadata = animation([
  style({
    visibility: 'hidden'
  }),
  animate('{{ duration }} {{ delay }}', keyframes([
    style({
      visibility: 'visible',
      opacity: 0,
      transform: 'translate3d(0, {{ distance }}, 0)',
      easing: 'ease',
      offset: 0
    }),
    style({
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
      easing: 'ease',
      offset: 1
    })
  ]))
], {
  params: {
    duration: '1s',
    delay: '300ms',
    distance: '25%'
  }
});
export const slideInAnimation = trigger('slide', [
  transition(':enter', [
    style({ transform: 'translateY(20px)', opacity: 1 }),
    animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
  ])
]);

export const bounceAnimation = trigger('bounce', [
    // state('inital', style({transform: 'translateY(0)'})),
    state('active', style({transform: 'translateY(0)'})),
    // transition('initial => active', [
    //   animate('500ms cubic-bezier(0,0,0,1)'),
    // ]),
    // transition('active => initial', [
    //   animate('500ms cubic-bezier(1,0,1,1)'),
    // ]),
    transition('* => active', [
      sequence([
        style({ transform: 'translateY(0)'}),
        animate("400ms cubic-bezier(0,0,0,1)", style({ transform: 'translateY(-14px)' })),
        animate("300ms cubic-bezier(1,0,1,1)", style({ transform: 'translateY(0)' })),
        animate("200ms cubic-bezier(0,0,0,1)", style({ transform: 'translateY(-10px)' })),
        animate("150ms cubic-bezier(1,0,1,1)", style({ transform: 'translateY(0)' })),
        animate("100ms cubic-bezier(0,0,0,1)", style({ transform: 'translateY(-5px)' })),
        animate("80ms cubic-bezier(1,0,1,1)", style({ transform: 'translateY(0)' })),
      ]),
    ])
]);