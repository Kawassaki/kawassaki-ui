import { X } from 'phosphor-react'
import {
  CloseButton,
  ModalActions,
  ModalChildren,
  ModalContainer,
  ModalContent,
  ModalHeader,
} from './styles'
import {
  MouseEvent as MouseEventReact,
  ReactElement,
  Ref,
  forwardRef,
  useCallback,
  useEffect,
} from 'react'
import { Heading } from '../Heading'
import { Button } from '../Button'

export interface ModalProps {
  onCloseModal: () => void
  onPrimaryButtonClick?: (e: MouseEventReact<HTMLButtonElement>) => void
  onSecondaryButtonClick?: (e: MouseEventReact<HTMLButtonElement>) => void
  isModalWithActions?: boolean
  primaryButtonLabel?: string
  secondaryButtonLabel?: string
  showModal: boolean
  children: ReactElement
  size: 'sm' | 'md' | 'lg' | 'full'
  modalTitle: string
  overlay?: 'low' | 'medium' | 'high'
}

export const Modal = forwardRef(
  (
    {
      onPrimaryButtonClick,
      onCloseModal,
      onSecondaryButtonClick,
      showModal,
      children,
      size,
      modalTitle,
      isModalWithActions = false,
      overlay = 'medium',
      primaryButtonLabel,
      secondaryButtonLabel,
    }: ModalProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const handleOnCloseModal = (e: MouseEventReact<HTMLButtonElement>) => {
      e.stopPropagation()
      onCloseModal()
    }

    const handleClickOutside = useCallback(
      ({ target }: MouseEvent) => {
        if (ref && !(ref as any).current.contains(target as Node)) {
          onCloseModal()
        }
      },
      [ref, onCloseModal],
    )

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside)

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [handleClickOutside, ref])

    return (
      <ModalContainer showModal={showModal} overlay={overlay}>
        <ModalContent size={size} ref={ref}>
          <ModalHeader>
            <Heading>{modalTitle}</Heading>
            <CloseButton onClick={handleOnCloseModal}>
              <X size={20} />
            </CloseButton>
          </ModalHeader>
          <ModalChildren>{children}</ModalChildren>
          {isModalWithActions ? (
            <ModalActions>
              <Button
                type="button"
                variant="secondary"
                onClick={onSecondaryButtonClick}
              >
                {secondaryButtonLabel || ''}
              </Button>
              <Button
                type="submit"
                variant="primary"
                onClick={onPrimaryButtonClick}
              >
                {primaryButtonLabel || ''}
              </Button>
            </ModalActions>
          ) : null}
        </ModalContent>
      </ModalContainer>
    )
  },
)

Modal.displayName = 'Modal'
