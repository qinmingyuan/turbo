import { FormInterceptor, FormInterceptorDelegate } from "./form_interceptor";
import { LinkInterceptor, LinkInterceptorDelegate } from "./link_interceptor";
export declare class FrameRedirector implements LinkInterceptorDelegate, FormInterceptorDelegate {
    readonly element: Element;
    readonly linkInterceptor: LinkInterceptor;
    readonly formInterceptor: FormInterceptor;
    constructor(element: Element);
    start(): void;
    stop(): void;
    shouldInterceptLinkClick(element: Element, url: string): boolean;
    linkClickIntercepted(element: Element, url: string): void;
    shouldInterceptFormSubmission(element: HTMLFormElement): boolean;
    formSubmissionIntercepted(element: HTMLFormElement): void;
    private shouldRedirect;
    private findFrameElement;
}