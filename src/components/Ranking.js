import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'

function Ranking() {
    const [members, setMembers] = useState([])
    const supabase = useSupabaseClient()

    useEffect(() => {
        fetchMembers()
    }, [])

    async function fetchMembers() {
        const { data, error } = await supabase
            .from('space_members')
            .select('member_nickname, points')
            .order('points', { ascending: false })

        if (error) {
            console.log(error)
        } else {
            setMembers(data)
        }
    }

    return (
        <div>
            <ol>
                {members.map((member) => (
                    <li key={member.member_nickname}>
                        {member.member_nickname} - {member.points}
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Ranking
