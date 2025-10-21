SELECT 
    u.email,
    m.title,
    m."order",
    ump.status,
    ump.quiz_passed,
    ump.completed_at
FROM user_module_progress ump
JOIN users u ON ump.user_id = u.id
JOIN modules m ON ump.module_id = m.id
ORDER BY m."order";
