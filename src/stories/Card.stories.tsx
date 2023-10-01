import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '../components/Card'

const meta = {
    title: 'Components/Card',
    component: Card,
    decorators: [
        (Story) => (
            <div style={{ maxWidth: 320 }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
    args: {
        image: 'https://cdn.sanity.io/images/767s1cf5/production/bf54442dd82a3dac14987939e4fb6cdb2cbb302e-1000x714.png',
        heading: 'Heading',
        description: 'Lorem ipsum dolor sit amet consectetur. Elementum suspendisse sed ultricies sit non placerat facilisi purus.',
        button: false
    }
}

export const Button: Story = {
    args: {
        image: 'https://cdn.sanity.io/images/767s1cf5/production/bf54442dd82a3dac14987939e4fb6cdb2cbb302e-1000x714.png',
        heading: 'Heading',
        description: 'Lorem ipsum dolor sit amet consectetur. Elementum suspendisse sed ultricies sit non placerat facilisi purus.',
        button: {
            href: '#',
            label: 'Read more'
        },
        isSelected: false
    }
}

export const Selected: Story = {
    args: {
        image: 'https://cdn.sanity.io/images/767s1cf5/production/bf54442dd82a3dac14987939e4fb6cdb2cbb302e-1000x714.png',
        heading: 'Heading',
        description: 'Lorem ipsum dolor sit amet consectetur. Elementum suspendisse sed ultricies sit non placerat facilisi purus.',
        button: false,
        isSelected: true
    }
}